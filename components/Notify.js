import { useContext } from "react";
import { Context } from "../context/index";
import Loading from "./Loading";

export default function Notify() {
  const { state, dispatch } = useContext(Context);
  const { notify } = state;
  return <>{notify.loading && <Loading />}</>;
}
