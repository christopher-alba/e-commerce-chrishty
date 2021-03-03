import styled from "styled-components";

const Button = styled.button`
    ${props => {
        if(props.type === "primary")
        return `background: ${props.theme.colors.jcBlue100}`
        if(props.type === "secondary")
        return `background: ${props.theme.colors.jcBlueGreen100}`
        if(props.type === "tertiary")
        return `background: ${props.theme.colors.jcPink100}`

    }}
`

export default Button;