import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Home from "../Home"

describe('Home', () => {

    it("render h1", () => {

        render(<Home />)

        const h1 = screen.getByText(/We Develop/)

        expect(h1).toBeInTheDocument()

    })

})