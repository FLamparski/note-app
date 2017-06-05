export default function postToPromise(worker, payload) {
  return new Promise(function(resolve, reject) {
    worker.onmessage = e => resolve(e.data);
    worker.onerror = reject;
    worker.postMessage(payload);
  });
}
