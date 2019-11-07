import { registerAcceptTaskExtensions } from "./acceptTask";
import { registerHangupCallExtensions } from "./hangupCall";
import { registerHoldParticipantExtensions } from "./holdParticipant";
import { registerUnholdParticipantExtensions } from "./unholdParticipant";
import { registerKickParticipantExtensions } from "./kickParticipant";

export function registerActionExtensions() {
	registerAcceptTaskExtensions();
	registerHangupCallExtensions();
	registerHoldParticipantExtensions();
	registerUnholdParticipantExtensions();
	registerKickParticipantExtensions();
}
