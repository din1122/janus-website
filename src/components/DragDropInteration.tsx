import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { pageLayout } from '~/shared/LayoutStyle';

// Types
type Position = { x: number; y: number };

interface CardProps {
  $isDragging: boolean;
}

// Styled Components
const Container = styled.div`
  ${pageLayout}
  padding: 20px;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const MedicalRecordCard = styled.div.attrs<CardProps & { $position: Position }>(
  props => ({
    style: {
      transform: `
      translate(${props.$position.x}px, ${props.$position.y}px)
      ${props.$isDragging ? 'scale(1.05) rotate(5deg)' : ''}
    `
    }
  })
)<CardProps>`
  background: #e8e9fc;
  border-radius: 16px;
  border: 1px solid #d2d3f9;
  width: 220px;
  height: 200px;
  padding: 16px;
  cursor: grab;
  position: absolute;
  user-select: none;
  will-change: transform;
  transition: transform 0.05s linear;
  z-index: 99;
  &:active {
    cursor: grabbing;
    box-shadow: 0px 5.56px 25.021px 2.78px rgba(210, 211, 249, 0.44);
  }
`;

const CardTitle = styled.span`
  color: #a3a4c2;
  font-size: 22px;
  font-weight: 700;
`;

const DropZone = styled.div<{ $isOver: boolean }>`
  width: 300px;
  height: 200px;
  border: 2px dashed ${({ $isOver }) => ($isOver ? '#4ade80' : '#94a3b8')};
  border-radius: 8px;
  background-color: ${({ $isOver }) => ($isOver ? '#f0fdf4' : '#f9fafb')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50px;
  right: 50px;
  transition: transform 0.05s linear;
`;

// Main Component
const DragDropInteraction: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 200, y: 100 });
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef<Position>({ x: 0, y: 0 });

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current!.getBoundingClientRect();
    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    setIsDragging(true);
  }, []);

  const handleDrag = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      e.stopPropagation();
      const newPosition = {
        x: e.clientX - dragOffsetRef.current.x,
        y: e.clientY - dragOffsetRef.current.y
      };

      setPosition(newPosition);

      if (dropZoneRef.current && cardRef.current) {
        const dropZoneRect = dropZoneRef.current.getBoundingClientRect();
        const cardRect = cardRef.current.getBoundingClientRect();

        setIsOverDropZone(
          cardRect.right > dropZoneRect.left &&
            cardRect.left < dropZoneRect.right &&
            cardRect.bottom > dropZoneRect.top &&
            cardRect.top < dropZoneRect.bottom
        );
      }
    },
    [isDragging]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (isOverDropZone) {
      alert('Medical Records Dropped!');
      // Handle drop logic here (e.g., upload or share the record)
    }
    setIsOverDropZone(false);
  }, [isOverDropZone]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseDown = (e: MouseEvent) =>
      handleDragStart(e as unknown as React.MouseEvent);

    card.addEventListener('mousedown', handleMouseDown);

    return () => {
      card.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleDragStart]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging, handleDrag, handleDragEnd]);

  return (
    <Container>
      <MedicalRecordCard
        ref={cardRef}
        $isDragging={isDragging}
        $position={position}
      >
        <CardTitle>Medical Records</CardTitle>
      </MedicalRecordCard>
      <DropZone ref={dropZoneRef} $isOver={isOverDropZone}>
        <p>{isOverDropZone ? 'Release to Share' : 'Drag records to share'}</p>
      </DropZone>
    </Container>
  );
};

export default DragDropInteraction;
