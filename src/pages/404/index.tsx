import { Link } from "react-router-dom";
import { NotFound } from "components/404";
import { PrimaryButton } from "components/button";

export const FourOFour: React.FC = (): JSX.Element => {
  return (
    <div className="grid h-screen place-items-center text-center">
      <div>
        <NotFound message="What are you looking for? Page not found." />
        <br />
        <br />
        <Link to="/">
          <PrimaryButton type="button" size="lg">
            Back to Home
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};
