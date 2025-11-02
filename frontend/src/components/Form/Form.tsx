"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.css";
import { FormData } from "@/lib/helpers";
import Link from "next/link";

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

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(data);
        alert("Správa bola úspešne odoslaná! Ďakujeme za kontakt.");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Nastala chyba pri odosielaní správy. Skúste to prosím znovu.");
    }
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
      <div className="flex gap-2 flex-col mx-10 sm:mx-1 items-left">
        <div>
          <input
            {...register("checkedBox", {
              required: "Pole je povinné.",
            })}
            type="checkbox"
            className="mr-1"
          />
          Oboznámil(a) som sa so
          <Link href="/gdpr" target="_blank" className={styles.link}>
            <b> Zásadami ochrany osobných údajov.</b>
          </Link>
        </div>
        {errors.checkedBox && (
          <span className={styles.error}>{errors.checkedBox.message}</span>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Odoslať
      </button>
    </form>
  );
}
