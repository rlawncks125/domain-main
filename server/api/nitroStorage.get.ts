export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem("db:test");
  return data;
});
