export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await useStorage().setItem("db:test", body);
  return "Data is set";
});
