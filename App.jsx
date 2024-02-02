import React, { useState } from "react";

const App = () => {
  const [signatures, setSignatures] = useState(Array(5).fill(false));

  const handleSignature = (userIndex) => {
    const updatedSignatures = [...signatures];
    updatedSignatures[userIndex] = !updatedSignatures[userIndex];
    setSignatures(updatedSignatures);
  };

  const allSignaturesComplete = signatures.every((sig) => sig);

  return (
    <div className="p-4">
      <div className="my-4 text-xl font-bold">
        다섯 명의 유저를 기준으로 구현한 멀티 시그니처의 큰 틀
      </div>
      <div className="my-4">
        각 유저들은 자산의 이동을 위한 서명을 해 주셔야 합니다.
        <br /> 본인이 한 서명을 취소할 수 있지만, 다른 유저가 모두 승인을 하여
        최종으로 완료가 되었을 때에는 서명을 취소할 수 없습니다.
      </div>
      {signatures.map((sig, index) => (
        <div key={index} className="flex items-center mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2" />
          <span>
            {`User ${index + 1}: ${sig ? "승인 완료" : "승인 대기 중"}`}
            <button
              onClick={() => handleSignature(index)}
              className="ml-auto bg-green-500 text-white px-2 py-1 rounded ml-4"
              disabled={allSignaturesComplete}
            >
              {sig ? "서명 취소" : "서명"}
            </button>
          </span>
        </div>
      ))}
      {allSignaturesComplete && (
        <p className="text-green-600">모든 서명이 완료되었습니다.</p>
      )}
    </div>
  );
};

export default App;
