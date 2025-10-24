"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "@/lib/helpers";
import styles from "./CareerForm.module.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function CareerForm() {
  const [phone, setPhone] = useState("");
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
      // Include phone number in the data
      const formData = {
        ...data,
        phone: phone,
      };

      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Vaša žiadosť bola úspešne odoslaná! Budeme Vás kontaktovať.");
        reset();
        setPhone("");
      } else {
        throw new Error("Failed to send career application");
      }
    } catch (error) {
      console.error("Error sending career application:", error);
      alert("Nastala chyba pri odosielaní žiadosti. Skúste to prosím znovu.");
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>Meno</label>
        <input
          type="text"
          className={styles.input}
          {...register("firstName", {
            required: "Meno je povinné",
            minLength: { value: 2, message: "Meno musí mať aspoň 2 znaky" },
          })}
        />
        {errors.firstName && (
          <span className={styles.error}>{errors.firstName.message}</span>
        )}
        <label className={styles.label}>Priezvisko</label>
        <input
          type="text"
          className={styles.input}
          {...register("lastName", {
            required: "Priezvisko je povinné",
            minLength: {
              value: 2,
              message: "Priezvisko musí mať aspoň 2 znaky",
            },
          })}
        />
        {errors.lastName && (
          <span className={styles.error}>{errors.lastName.message}</span>
        )}
        <label className={styles.label}>Email</label>
        <input
          type="email"
          className={styles.input}
          {...register("email", {
            required: "Email je povinný",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Neplatný mail",
            },
          })}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
        <label className={styles.label}>Telefón</label>
        <PhoneInput
          defaultCountry="sk"
          value={phone}
          onChange={(phone: string) => setPhone(phone)}
        />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </>
  );
}
