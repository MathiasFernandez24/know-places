import { Dimensions } from "react-native";

type sizes = {
  borderRadius: { 1: number; 2: number; 3: number; 4: number };
  iconSize: { 1: number; 2: number; 3: number; 4: number };
  fontSize: { 1: number; 2: number; 3: number; 4: number };
  space: { 1: number; 2: number; 3: number; 4: number; 5: number; 6: number };
};

export const sizes: sizes = {
  borderRadius: { "1": 4, "2": 8, "3": 12, "4": 16 },
  iconSize: { "1": 20, "2": 24, "3": 28, "4": 32 },
  fontSize: { "1": 12, "2": 16, "3": 20, "4": 24 },
  space: { "1": 4, "2": 8, "3": 12, "4": 16, "5": 20, "6": 24 },
};
