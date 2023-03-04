import { useRouter } from "next/router";
import { Button, Result } from "antd";

const Custom404 = () => {
  const router = useRouter();

  return (
    <div className="grid min-h-screen place-content-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        }
      />
    </div>
  );
};

export default Custom404;
