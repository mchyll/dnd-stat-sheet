function subscribe(handler: (event: any) => void) {
  handler("event data");

  return {
    unsubscribe: () => console.log("unsubscribing")
  }
}

const sub = subscribe(function handler(event) {
  console.log("Inside handler, got this event:", event);
  sub.unsubscribe();
});
