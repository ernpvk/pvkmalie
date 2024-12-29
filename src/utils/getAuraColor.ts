export const getAuraColor = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-200/40";
    case "orange":
      return "bg-orange-200/40";
    case "red":
      return "bg-red-200/40";
    case "green":
      return "bg-green-200/40";
    case "purple":
      return "bg-purple-200/40";
    case "fuchsia":
      return "bg-fuchsia-200/40";
    case "yellow":
      return "bg-yellow-200/40";
    case "teal":
      return "bg-teal-200/40";
    case "gray":
      return "bg-gray-200/40";
    default:
      return "bg-stone-200/40";
  }
};
