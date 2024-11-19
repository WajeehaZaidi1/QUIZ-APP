import { useState, useEffect } from "react";

export default function QuestionTimer() {
    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
}