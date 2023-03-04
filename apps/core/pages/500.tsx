import { useRouter } from "next/router";
import { Button, Result } from "antd";

const Custom500 = () => {
  const router = useRouter();

  return (
    <div className="grid min-h-screen place-content-center">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        }
      />
    </div>
  );
};

export default Custom500;
