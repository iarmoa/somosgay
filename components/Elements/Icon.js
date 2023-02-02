import dynamic from "next/dynamic";

const Icon = dynamic(
    () => import("react-icofont"),
    { ssr: false }
);

export default Icon;