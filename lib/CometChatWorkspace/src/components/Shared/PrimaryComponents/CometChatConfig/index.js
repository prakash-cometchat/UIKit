import { AvatarConfiguration } from "./AvatarConfiguration";
import { BadgeCountConfiguration } from "./BadgeCountConfiguration";
import { StatusIndicatorConfiguration } from "./StatusIndicatorConfiguration";
import { MessageReceiptConfiguration } from "./MessageReceiptConfiguration";

import { ConversationConfiguration } from "./ConversationConfiguration";
import { ConversationListConfiguration } from "./ConversationListConfiguration";
import { ConversationListItemConfiguration } from "./ConversationListItemConfiguration";
import { ConversationListItemInputDataConfiguration } from "./ConversationListItemInputDataConfiguration";

import { MessageHeaderConfiguration } from "./MessageHeaderConfiguration";
import { MessageListConfiguration } from "./MessageListConfiguration";
import { MessageComposerConfiguration } from "./MessageComposerConfiguration";

export class CometChatConfig {
	static Configurations = {
		
		/**General configs */
		Avatar: new AvatarConfiguration(),
		Status: new StatusIndicatorConfiguration(),
		Messages: {
			MessageHeader: {
				DataItem: {
					Avatar: new AvatarConfiguration(),
					Status: new StatusIndicatorConfiguration(),
					Title: {
						fontSize: "",
					},
					Subtitle: {
						fontSize: "",
					}
				}	
			},
			MessageList: {
				backgroundColor: "",
				alignment: "",
				MessageBubble: {
					sentMessageInputData: {
						thumbnail: true,
						status: false,
					},
					receivedMessagedInputData: {
						thumbnail: false,
						status: false,
					}
				},
			},
			MessageComposer: new MessageComposerConfiguration(),
		},
		
		/**Conversations configs */
		ConversationsWithMessages: {
			Conversations: {
				Listbase: {
					Search: {
						backgroundColor: ""
					},
					ConversationList: new ConversationListConfiguration(),
				}
			},
			Messages: {
				MessageHeader: {
					DataItem: {
						Avatar: new AvatarConfiguration(),
						Status: new StatusIndicatorConfiguration(),
						Title: {
							fontSize: "",
						},
						Subtitle: {
							fontSize: "",
						}
					}	
				},
				MessageList: {
					backgroundColor: "",
					alignment: "",
					MessageBubble: {
						sentMessageInputData: {
							thumbnail: true,
							status: false,
						},
						receivedMessagedInputData: {
							thumbnail: false,
							status: false,
						}
					},
				},
				MessageComposer: new MessageComposerConfiguration(),
			},
		},
		UsersWithMessages: {
			Users: {
				Avatar: new AvatarConfiguration(),
			},
			Messages: {
				MessageHeader: {
					DataItem: {
						Avatar: new AvatarConfiguration(),
						Status: new StatusIndicatorConfiguration(),
						Title: {
							fontSize: "",
						},
						Subtitle: {
							fontSize: "",
						}
					}	
				},
				MessageList: {
					backgroundColor: "",
					alignment: "",
					MessageBubble: {
						sentMessageInputData: {
							thumbnail: true,
							status: false,
						},
						receivedMessagedInputData: {
							thumbnail: false,
							status: false,
						}
					},
				},
				MessageComposer: new MessageComposerConfiguration(),
			},
		},
		GroupsWithMessages: {
			Groups: {
	
			},
			Messages: {
				MessageHeader: {
					DataItem: {
						Avatar: new AvatarConfiguration(),
						Status: new StatusIndicatorConfiguration(),
						Title: {
							fontSize: "",
						},
						Subtitle: {
							fontSize: "",
						}
					}	
				},
				MessageList: {
					backgroundColor: "",
					alignment: "",
					MessageBubble: {
						sentMessageInputData: {
							thumbnail: true,
							status: false,
						},
						receivedMessagedInputData: {
							thumbnail: false,
							status: false,
						}
					},
				},
				MessageComposer: new MessageComposerConfiguration(),
			},
		},
	};
}



/**
 * 	Example:
 * 	new Configuration({
		avatar: {},
		Messages: {},
		ConversationsWithMessages.Messages: Messages,
		ConversationsWithMessages.Conversations.Listbase.ConversationList.ConversationListItem.avatar: avatar,
		UsersWithMessages.Messages.MessageHeader.dataItem.avatar: avatar,
		GroupsWithMessages.Messages.MessageHeader.dataItem.avatar.backgroundColor: "red",
	})
 */


const _c = CometChatConfig.Configurations
_c.Avatar.width = "10px";
_c.UsersWithMessages.Users.Avatar = _c.Avatar

