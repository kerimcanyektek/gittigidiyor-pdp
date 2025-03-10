import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Thumbnail = styled.img<{ isActive: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? "2px solid #3f7eff" : "2px solid transparent")};
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 2px solid #3f7eff;
  }
`;
