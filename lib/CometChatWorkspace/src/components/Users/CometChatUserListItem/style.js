import {hexToRGB} from '../../../util/common'

export const listItemStyle = (props) => {
  const selectedState =
    props.selectedUser && props.selectedUser.uid === props.user.uid
      ? {
          backgroundColor: `${props.theme.backgroundColor.primary}`,
        }
      : {};

  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    cursor: "pointer",
    width: "100%",
    padding: "10px 20px",
    ...selectedState,
    "--list-item-bg-color-hover": `${props.theme.backgroundColor.primary}`,
  };
};

export const itemThumbnailStyle = () => {
  return {
    display: "flex",
    position: "relative",
    width: "36px",
    height: "36px",
    flexShrink: "0",
  };
};

export const itemDetailStyle = () => {
  return {
    width: "calc(100% - 45px)",
    flexGrow: 1,
    paddingLeft: "15px",
  };
};

export const itemNameStyle = (props) => {
  return {
    fontSize: `${props.titleFont}`,
    color: `${props.titleColor}`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    margin: "5px 0 0 0",
  };
};

export const itemDescriptionStyle = (props) => {
	const titleColorInRGB = hexToRGB(props.titleColor);

	return {
		marginTop: "10px",
		borderBottom: `1px solid rgba(${titleColorInRGB}, 10%)`,
	};
};
