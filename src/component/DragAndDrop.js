// components/GymMode/DragAndDrop.js
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DragAndDropComponent({ mealPlan, handleDragEnd }) {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {Object.keys(mealPlan).map((category) => (
        <Droppable key={category} droppableId={category}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h3 className="font-semibold text-lg mb-2">{category}</h3>
              {mealPlan[category].meals.map((meal, index) => (
                <Draggable key={index} draggableId={meal} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <li>{meal}</li>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
}

export default DragAndDropComponent;
