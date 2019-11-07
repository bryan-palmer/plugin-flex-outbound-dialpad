import { Actions, Notifications } from "@twilio/flex-ui";

export function registerHangupCallExtensions() {
  Actions.addListener("afterHangupCall", payload => {
    console.log("AFTER HANGUP CALL: ", payload);
    const task = payload.task;

    console.log(task);
    console.log(task.attributes);

    if (task.attributes.workerActivityPreDialPad) {
      Actions.invokeAction("SetActivity", {
        activityName: task.attributes.workerActivityPreDialPad
      }).catch(() => {
        Notifications.showNotification("ActivityStateUnavailable", {
          state1: task.attributes.workerActivityPreDialPad,
          state2: task.attributes.workerActivityPreDialPad
        });
      });
    }
  });
}
