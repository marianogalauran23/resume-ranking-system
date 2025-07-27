"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  function toggle() {
    setShowSignup(!showSignup);
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update cursor position
      document.documentElement.style.setProperty('--cursor-x', `${x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${y}px`);

      if (formRef.current) {
        const formRect = formRef.current.getBoundingClientRect();
        const elementCenterX = formRect.left + formRect.width / 2;
        const elementCenterY = formRect.top + formRect.height / 2;
        
        // Calculate direction from cursor to element center (inverse for shadow)
        const dirX = (elementCenterX - x) / window.innerWidth;
        const dirY = (elementCenterY - y) / window.innerHeight;
        
        // Calculate distance for intensity
        const distance = Math.sqrt(
          Math.pow(x - elementCenterX, 2) + 
          Math.pow(y - elementCenterY, 2)
        );
        const intensity = Math.min(1, 300 / distance);
        
        document.documentElement.style.setProperty('--shadow-x', `${dirX * 30}`);
        document.documentElement.style.setProperty('--shadow-y', `${dirY * 30}`);
        document.documentElement.style.setProperty('--shadow-intensity', `${intensity}`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.form} ref={formRef}>
        {!showSignup && (
          <div className={styles.container}>
            <h1>Log-In</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
<<<<<<< HEAD
            <a onClick={toggle}>Dont have an account? Sign up</a>
=======
            <a onClick={toggle}>Don't have an account? Sign up</a>
>>>>>>> f530064be3827b842f0f334844fcdd79efe20a98
          </div>
        )}
        {showSignup && (
          <div className={styles.container}>
            <h1>Sign-up</h1>
            <input type="text" placeholder="Firstname"/>
            <input type="text" placeholder="Middlename" />
            <input type="text" placeholder="Lastname" />
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button onClick={toggle}>Sign Up</button>
          </div>
        )}
      </div>
      <div className={styles.overlay} />
      <div className={styles.background}>
        <Image
          src="/background.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  );
}