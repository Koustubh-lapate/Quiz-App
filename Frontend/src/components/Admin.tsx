import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client/debug";
import { CreateProblem } from "./CreateProblem";
import { QuizControls } from "./QuizControls";

export const Admin = () = {
    const [socket, setSocket] = useState<null | any>(null);
    const [quizId, setQuizId] = useState("");
    const [roomId, setRoomId] = useState("");

    
}