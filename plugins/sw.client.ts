export default defineNuxtPlugin(() => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then((regist) => {
      console.log("서비스 워커 준비완료");

      Worker.instance.setRegist(regist);

      regist.addEventListener("updatefound", () => {
        const newWorker = Worker.instance.installing() as ServiceWorker;
        console.log("서비스 워커 업데이트 발견");

        newWorker.addEventListener("statechange", function () {
          console.log("서비스 워커 상태 변경", this.state);
        });
      });
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("서비스워커 컨트롤러 변경");
    });
  }
});

export class Worker {
  // @ts-ignore
  #regist: ServiceWorkerRegistration;

  static instance = new Worker();

  #isSubscribe = ref<boolean>();
  constructor() {}

  get register() {
    return this.#regist;
  }

  get getterIsSubscribe() {
    return this.#isSubscribe.value;
  }

  async setRegist(regist: ServiceWorkerRegistration) {
    this.#regist = regist;
  }

  installing() {
    return this.#regist.installing;
  }
}
