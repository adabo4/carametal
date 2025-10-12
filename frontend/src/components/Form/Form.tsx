"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  textMessage: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log("Form data:", data);
    // Here you can send the data to your backend
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.nameInputContainer}>
        <div className={styles.inputGroup}>
          <input
            {...register("firstName", {
              required: "Meno je povinné",
              minLength: { value: 2, message: "Meno musí mať aspoň 2 znaky" },
            })}
            type="text"
            placeholder="Meno"
            className={styles.input}
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            {...register("lastName", {
              required: "Priezvisko je povinné",
              minLength: {
                value: 2,
                message: "Priezvisko musí mať aspoň 2 znaky",
              },
            })}
            type="text"
            placeholder="Priezvisko"
            className={styles.input}
          />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <input
          {...register("email", {
            required: "Email je povinný",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Neplatný email",
            },
          })}
          type="email"
          placeholder="Email"
          className={styles.input}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.inputGroup}>
        <textarea
          {...register("textMessage", {
            required: "Text správy je povinný",
            minLength: {
              value: 10,
              message: "Správa musí mať aspoň 10 znakov",
            },
          })}
          placeholder="Text správy"
          className={styles.textarea}
        />
        {errors.textMessage && (
          <span className={styles.error}>{errors.textMessage.message}</span>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Odoslať
      </button>
    </form>
  );
}
