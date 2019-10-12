import React from "react";
import { create } from "react-test-renderer";
import Loading from './Loading'
describe("Loading component", () => {
    it("use jest snapshot since it will not changed", () => {
        const button = create(<Loading />);
        expect(button.toJSON()).toMatchSnapshot();
    });
}
);
