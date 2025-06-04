export const networkConfig = {
  subnet: process.env.SUBNET,
  startIp: 1,
  endIp: 254,
  portsToCheck: [554, 80, 8080, 443],
  rtspPort: 554,
};
