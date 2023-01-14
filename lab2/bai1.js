const gameEvents = new Map([
     [17, ' minh'],
     [36, ' tiến'],
     [47, ' sơn'],
     [61, ' hiệp'],
     [64, ' hiếu'],
     [69, ' dũng'],
     [70, ' minh'],
     [72, ' tiến'],
     [76, ' sơn'],
     [80, ' đức'],
     [92, ' chuẩn'],
   ]);


const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}