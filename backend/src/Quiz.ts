import { IoManager } from "./managers/IoManager";

export type AllowedSubmissions = 0 | 1 | 2 | 3;
const PROBLEM_TIME_S = 20;

interface User {
    name: string;
    id: string;
    points: number;
}

interface Submission {
    problemId: string;
    userId: string;
    isCorrect: boolean;
    optionSelected: AllowedSubmissions;
}

interface Problem {
    id: string;
    title: string;
    description: string;
    image?: string;
    startTime: number;
    answer: AllowedSubmissions;
    options: {
        id: number;
        title: string;
    }[]
    submissions: Submission[]
}

export class Quiz {
    public roomId: string;
    private hasStarted: boolean;
    private problems: Problem[];
    private activeProblem: number;
    private users: User[];
    private currentState: "leaderboard" | "question" | "not_started" | "ended";

    constructor(roomId: string) {
        this.roomId = roomId;
        this.hasStarted = false;
        this.problems = [];
        this.activeProblem = 0;
        this.users = [];
        this.currentState = "not_started";
        console.log("room created");

        setInterval(() => {
            this.debug();
        }, 10000)
    }

    debug() {
        console.log("----debug---")
        console.log(this.roomId)
        console.log(JSON.stringify(this.problems))
        console.log(this.users)
        console.log(this.currentState)
        console.log(this.activeProblem)
    }

    addProblem(problem: Problem) {
        this.problems.push(problem);
        console.log(this.problems);
    }

    start() {
        this.hasStarted = true;
        this.setActiveProblem(this.problems[0]);
    }

    setActiveProblem(problem: Problem) {
        console.log("set active problem");
        
    }
}