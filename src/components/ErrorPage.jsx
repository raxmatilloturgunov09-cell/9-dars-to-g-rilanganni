import React from "react";

import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <img
      className="cursor-pointer"
        onClick={() => navigate("/")}
        src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299952.gif"
        alt="404 not found"
      />
    </div>
  );
}

export default ErrorPage;
