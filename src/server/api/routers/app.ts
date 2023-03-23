import axios from "axios";

export type CarkparkInfoType = {
  total_lots: number;
  lot_type: "H" | "Y" | "C";
  lots_available: number;
};

export type CarparkDataType = {
  carpark_info: CarkparkInfoType[];
  carpark_number: string;
  update_datetime: Date;
};

export type ItemType = {
  timestamp: Date;
  carpark_data: CarparkDataType[];
};

export type CarparkResponseDataType = {
  items: ItemType[];
};

export type ComputedCarparkValue = {
  carparkIds: string[];
  availableLot: number;
};

export type ComputedCarparkData = {
  highest: ComputedCarparkValue;
  lowest: ComputedCarparkValue;
};

export type ComputedCarparkDataType = {
  small: ComputedCarparkData;
  medium: ComputedCarparkData;
  big: ComputedCarparkData;
  large: ComputedCarparkData;
};

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  getData: publicProcedure.query(async () => {
    const {
      data: { items },
    } = await axios.get<CarparkResponseDataType>(
      "https://api.data.gov.sg/v1/transport/carpark-availability"
    );
    const value: ComputedCarparkDataType = {
      small: {
        highest: {
          carparkIds: [],
          availableLot: 0,
        },
        lowest: {
          carparkIds: [],
          availableLot: Infinity,
        },
      },
      medium: {
        highest: {
          carparkIds: [],
          availableLot: 0,
        },
        lowest: {
          carparkIds: [],
          availableLot: Infinity,
        },
      },
      big: {
        highest: {
          carparkIds: [],
          availableLot: 0,
        },
        lowest: {
          carparkIds: [],
          availableLot: Infinity,
        },
      },
      large: {
        highest: {
          carparkIds: [],
          availableLot: 0,
        },
        lowest: {
          carparkIds: [],
          availableLot: Infinity,
        },
      },
    };
    const cpData = items[0]!.carpark_data;
    for (const item of cpData) {
      let size: keyof typeof value = "small";
      const { total, availability } = item.carpark_info.reduce(
        (prev, curr) => {
          return {
            total: prev.total + +curr.total_lots,
            availability: prev.availability + +curr.lots_available,
          };
        },
        { total: 0, availability: 0 }
      );
      // - small : less than 100 lots
      // - medium : 100 lots or more, but less than 300 lots
      // - big : 300 lots or more, but less than 400 lots
      // - large : 400 lots or more
      if (total > 100 && total < 300) size = "medium";
      else if (total >= 300 && total < 400) size = "big";
      else if (total >= 400) size = "large";

      const sizeValue = value[size];
      if (availability > sizeValue.highest.availableLot) {
        sizeValue.highest.availableLot = availability;
        sizeValue.highest.carparkIds = [item.carpark_number];
      } else if (availability < sizeValue.lowest.availableLot) {
        sizeValue.lowest.availableLot = availability;
        sizeValue.lowest.carparkIds = [item.carpark_number];
      } else if (availability === sizeValue.highest.availableLot) {
        sizeValue.highest.carparkIds.push(item.carpark_number);
      } else if (availability === sizeValue.lowest.availableLot) {
        sizeValue.lowest.carparkIds.push(item.carpark_number);
      }
    }

    return value;
  }),
});
