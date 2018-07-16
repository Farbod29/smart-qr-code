// import React, {PropTypes} from "react";
//
// class Image extends React.Component {
//     createSrc = (p) => {
//         return p.src && p.src !== ""
//             ? `${p.isLocal ? "/" : ""}${p.src}`
//             : `/${p.localPlaceholder}`;
//     };
//     onError = () => {
//         const s = this.state;
//         if (s.src && s.src.startsWith("http://")) {
//             this.setState({src: s.src.replace("http://", "https://")});
//         } else {
//             const alt = this.props.localPlaceholder;
//             if (alt && !this.state.hasFailedOnce) {
//                 this.setState({src: `/${alt}`, hasFailedOnce: true});
//             }
//         }
//     };
//
//     constructor(props, context) {
//         super(props, context);
//
//         const p = this.props;
//
//         this.state = {
//             src: this.createSrc(p),
//             hasFailedOnce: false
//         };
//     }
//
//     componentWillReceiveProps(p) {
//         this.setState({
//             src: this.createSrc(p),
//             hasFailedOnce: false
//         });
//     }
//
//     render() {
//         const p = this.props;
//         return (
//             <img
//                 id={p.id}
//                 src={this.state.src}
//                 className={p.className}
//                 disabled={p.disabled}
//                 style={p.style}
//                 onClick={p.onClick}
//                 onError={this.onError}
//             />
//         );
//     }
// }
//
// Image.propTypes = {
//     src: PropTypes.string,
//     isLocal: PropTypes.bool,
//     localPlaceholder: PropTypes.string,
//     className: PropTypes.string,
//     style: PropTypes.object,
//     disabled: PropTypes.bool,
//     onClick: PropTypes.func
// };
//
// Image.defaultProps = {
//     disabled: false
// };
//
// export default Image;
