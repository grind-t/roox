import React, { useMemo, useState } from "react";
import { useUsers } from "../../../hooks/users";
import Loader from "../../common/loader";
import styles from "./profile-form.module.scss";
import { useParams } from "react-router-dom";
import "../../../styles/controls.scss";
import { useForm } from "react-hook-form";

export interface ProfileFormProps {
  isReadOnly?: boolean;
  onSubmit?: (data: any) => void;
}

export default function ProfileForm({
  isReadOnly,
  onSubmit,
}: ProfileFormProps) {
  const { data: users, error } = useUsers();
  const params = useParams();
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const userId = Number.parseInt(params.userId) || 0;
  const user = useMemo(() => {
    if (!users) return;
    return users.find((user) => user.id === userId);
  }, [users, userId]);

  if (error) return <div>Ошибка 😢</div>;

  if (!users) return <Loader />;

  const Label = ({ children }: any) => (
    <label className="label">{children}</label>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fields}>
        <Label>
          Имя
          <input
            type="text"
            defaultValue={user.name}
            readOnly={isReadOnly}
            className="input"
            {...register("name", { required: true })}
          />
        </Label>
        <Label>
          Никнейм
          <input
            type="text"
            defaultValue={user.username}
            readOnly={isReadOnly}
            className="input"
            {...register("username", { required: true })}
          />
        </Label>
        <Label>
          Почта
          <input
            type="email"
            defaultValue={user.email}
            readOnly={isReadOnly}
            className="input"
            {...register("email", { required: true })}
          />
        </Label>
        <Label>
          Улица
          <input
            type="text"
            defaultValue={user.address.street}
            readOnly={isReadOnly}
            className="input"
            {...register("address.street", { required: true })}
          />
        </Label>
        <Label>
          Город
          <input
            type="text"
            defaultValue={user.address.city}
            readOnly={isReadOnly}
            className="input"
            {...register("address.city", { required: true })}
          />
        </Label>
        <Label>
          Почтовый индекс
          <input
            type="text"
            defaultValue={user.address.zipcode}
            readOnly={isReadOnly}
            className="input"
            {...register("address.zipcode", { required: true })}
          />
        </Label>
        <Label>
          Телефон
          <input
            type="tel"
            defaultValue={user.phone}
            readOnly={isReadOnly}
            className="input"
            {...register("phone", { required: true })}
          />
        </Label>
        <Label>
          Сайт
          <input
            type="text"
            defaultValue={user.website}
            readOnly={isReadOnly}
            className="input"
            {...register("website", { required: true })}
          />
        </Label>
        <Label>
          Комментарий
          <textarea
            readOnly={isReadOnly}
            className="textarea"
            {...register("comment")}
          />
        </Label>
      </fieldset>
      <button disabled={isReadOnly} className={`submitButton ${styles.submit}`}>
        Отправить
      </button>
    </form>
  );
}
