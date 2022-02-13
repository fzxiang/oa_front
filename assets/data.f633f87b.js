const cardList = (() => {
  const result = [];
  for (let i = 0; i < 12; i++) {
    result.push({
      title: "OA\u529E\u516C\u7CFB\u7EDF",
      icon: "logos:vue",
      color: "#1890ff",
      active: "100",
      new: "1,799",
      download: "bx:bx-download"
    });
  }
  return result;
})();
export { cardList };
