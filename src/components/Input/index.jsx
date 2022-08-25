import { Container } from "./styles"

export function Input({ labelName, value, id, name, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{value} {labelName}
      </label>
      <input id={id} value={value} name={name} {...rest} />
    </Container>
  )
}