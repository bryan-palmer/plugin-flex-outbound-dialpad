import { registerAcceptTaskExtensions } from "./acceptTask";
import { registerCompleteTaskExtensions } from "./completeTask";
import { registerHoldParticipantExtensions } from "./holdParticipant";
import { registerUnholdParticipantExtensions } from "./unholdParticipant";
import { registerKickParticipantExtensions } from "./kickParticipant";

export function registerActionExtensions() {
	registerAcceptTaskExtensions();
	registerCompleteTaskExtensions();
	registerHoldParticipantExtensions();
	registerUnholdParticipantExtensions();
	registerKickParticipantExtensions();
}
