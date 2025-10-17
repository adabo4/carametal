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

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log("Form data:", data);
    //  await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    reset();
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
          type="text"
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
