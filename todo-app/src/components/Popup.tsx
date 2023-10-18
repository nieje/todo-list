import { CloseIcon } from "@/icons/CloseIcon";
import React from "react";
import styled from "styled-components";

const Container = styled.div<{ open?: boolean }>`
  position: fixed;
  z-index: ${(props) => (props.open ? "100" : "-1")};
  opacity: ${(props) => (props.open ? "1" : "0")};

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  pointer-events: ${(props) => (props.open ? "all" : "none")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.03);
  z-index: 100;
`;

const Popup = styled.div`
  position: relative;
  width: 400px;
  height: 500px;

  background-color: #faf9fb;
  border-radius: 3px;
  z-index: 200;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupX = styled.div`
  position: absolute;
  cursor: pointer;
  aspect-ratio: 1/1;
  z-index: 300;

  top: 24px;
  right: 24px;

  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  text-align: left;
  background: #fff1e1;
  padding: 0 8px;
  margin-top: 12px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 4px;
  text-align: center;
`;

const SmallText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 20px;
`;

type Props = {
  isOpen: boolean;
  clickHandlerClose: () => void;
  todo: any;
};

export const DetailsPopup: React.FC<Props> = ({
  isOpen,
  clickHandlerClose,
  todo,
}) => {
  const created = todo.attributes.createdAt;
  const deadline = todo.attributes.deadline;

  let d = new Date(created);
  let formatCreatedAt = d.toLocaleDateString("fi-FI", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  let d2 = new Date(deadline);
  let formatDeadline = d2.toLocaleDateString("fi-FI", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <Container open={isOpen}>
      <Overlay onClick={clickHandlerClose} />
      <Popup>
        <PopupX onClick={clickHandlerClose}>
          <CloseIcon />
        </PopupX>
        <>
          <TextContainer>
            <Title>{todo.attributes.name}</Title>
            <SmallText>Added: {formatCreatedAt}</SmallText>
            <TextWrapper>
              <Text>{todo.attributes.description}</Text>

              <Text>
                Deadline:{" "}
                {todo.attributes.deadline ? (
                  <span>{formatDeadline}</span>
                ) : (
                  <span>-</span>
                )}
              </Text>
            </TextWrapper>
          </TextContainer>
        </>
      </Popup>
    </Container>
  );
};
