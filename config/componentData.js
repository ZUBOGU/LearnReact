module.exports = [{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":true,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A super lame component that says Hello with a custom message. */\nfunction HelloWorld({message}) {\n  return <div>Hello {message}</div>\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string.isRequired\n};\n\nHelloWorld.defaultProps = {\n  message: 'World'\n};\n\nexport default HelloWorld;\n","examples":[{"name":"ExampleHelloWorld","description":"Test example message","code":"import React from 'react';\nimport HelloWorld from 'learn-react/HelloWorld';\n\n/** Test example message */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message=\"viewers!\" />\n}\n"}]},{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({htmlFor, label, required}) {\n    return (\n      <label style={{display: 'block'}} htmlFor={htmlFor}>\n        {label} { required && <span style={{color: 'red'}}> *</span> }\n      </label>\n    )\n}\n  \nLabel.propTypes = {\n    /** HTML ID for associated input */\n    htmlFor: PropTypes.string.isRequired,\n  \n    /** Label text */\n    label: PropTypes.string.isRequired,\n  \n    /** Display asterisk after label if true */\n    required: PropTypes.bool\n};\n  \nexport default Label;","examples":[{"name":"ExampleOptional","description":"Optional label","code":"import React from 'react';\nimport Label from 'learn-react/Label';\n\n/** Optional label */\nexport default function ExampleOptional() {\n  return <Label htmlFor=\"test\" label=\"test\" />\n}"},{"name":"ExampleRequired","description":"Required label","code":"import React from 'react';\nimport Label from 'learn-react/Label';\n\n/** Required label */\nexport default function ExampleRequired() {\n    return <Label htmlFor=\"test\" label=\"test\" required />\n}"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends React.Component {\n    getColor = (percent) => {\n        if (this.props.percent === 100) return 'green';\n        return this.props.percent > 50 ? 'lightgreen' : 'red';\n    }\n\n    getWidthAsPercentOfTotalWidth = () => {\n        return parseInt(this.props.width * (this.props.percent / 100), 10);\n    }\n\n    render() {\n        const {percent, width, height} = this.props;\n        return (\n            // inline style\n            <div style={{border : 'solid 1px lightgray', width : width}}>\n                <div style={{\n                    width: this.getWidthAsPercentOfTotalWidth(),\n                    height,\n                    backgroundColor: this.getColor(percent)\n                }} /> \n            </div>\n        );\n    }\n}\n\nProgressBar.propTypes = {\n    /** Percent of progress completed */\n    percent: PropTypes.number.isRequired,\n  \n    /** Bar width */\n    width: PropTypes.number.isRequired,\n  \n    /** Bar height */\n    height: PropTypes.number\n  };\n  \n  ProgressBar.defaultProps = {\n    height: 5\n};\n\nexport default ProgressBar;","examples":[{"name":"Example100Percent","description":"100% progress  and height 20px","code":"import React from 'react';\nimport ProgressBar from 'learn-react/ProgressBar';\n\n/** 100% progress  and height 20px*/\nexport default function Example100Percent() {\n  return <ProgressBar percent={100} width={150} height={20} />\n}\n"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react';\nimport ProgressBar from 'learn-react/ProgressBar';\n\n/** 10% progress */\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} width={150} />\n}\n"},{"name":"Example70Percent","description":"70% progress","code":"import React from 'react';\nimport ProgressBar from 'learn-react/ProgressBar';\n\n/** 70% progress */\nexport default function Example70Percent() {\n  return <ProgressBar percent={70} width={150} />\n}\n"}]}]