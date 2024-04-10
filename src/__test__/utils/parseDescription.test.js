import React from "react";
import { parseDescription } from "../../utils/parseDescription";
import { render } from "@testing-library/react"; // Importa la función render

describe("parseDescription", () => {
  it("should render paragraphs with links", () => {
    const description =
      "This is a paragraph.\nThis is another paragraph with a link: https://example.com";

    const parsedDescription = parseDescription(description);

    const { container } = render(<div>{parsedDescription}</div>);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
