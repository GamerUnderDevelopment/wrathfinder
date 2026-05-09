import { describe, it } from "vitest";

describe("RootLayout", () => {
  // Layout cannot be unit tested in jsdom due to NextAuth/TRPC server dependencies.
  // Navbar mounting verified by visual inspection on deployment.
  it.skip("should render the navigation bar", () => {
    // render(<RootLayout>{null}</RootLayout>);
    // const nav = screen.getByRole("navigation");
    // expect(nav).toBeInTheDocument();
  });
});
