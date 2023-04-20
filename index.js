module.exports.run = async (event, context) => {
  const time = new Date();
  console.log(`Sua funcao CRON "${context.functionName}" rodou em ${time}`);
};
