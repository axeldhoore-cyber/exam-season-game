import { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";

export default function useInitialData() {
  const { initialData, setInitialData } = useContext(AppDataContext);
  return { initialData, setInitialData };
}
