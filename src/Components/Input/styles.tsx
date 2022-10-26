import styled from "styled-components";

const InputWrapper = styled.div`
  font-size: 1.125em;

  width: 85%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  background-color: inherit;

  label {
    /* grey1 */
    color: #212529;
    font-weight: 500;

    margin-bottom: 5px;
  }
  input {
    /* grey3 */
    color: #868e96;
    font-weight: 600;

    height: 44px;
    padding: 0 8px;
    /* grey7 */
    border: 2px solid #e9ecef;
    border-radius: 4px;

    :hover {
      /* grey7 */
      background-color: #e9ecef;
    }
    :focus {
      /* brand2 */
      outline: 2px solid #5126ea;
    }
  }
`;

export default InputWrapper;
