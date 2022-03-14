import React, { useMemo } from "react";
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

  const controls = [
    {
      name: "name",
      label: "Имя",
      type: "text",
      defaultValue: user.name,
      isRequired: true,
    },
    {
      name: "username",
      label: "Никнейм",
      type: "text",
      defaultValue: user.username,
      isRequired: true,
    },
    {
      name: "email",
      label: "Почта",
      type: "email",
      defaultValue: user.email,
      isRequired: true,
    },
    {
      name: "address.street",
      label: "Улица",
      type: "text",
      defaultValue: user.address.street,
      isRequired: true,
    },
    {
      name: "address.city",
      label: "Город",
      type: "text",
      defaultValue: user.address.city,
      isRequired: true,
    },
    {
      name: "address.zipcode",
      label: "Почтовый индекс",
      type: "text",
      defaultValue: user.address.zipcode,
      isRequired: true,
    },
    {
      name: "phone",
      label: "Телефон",
      type: "tel",
      defaultValue: user.phone,
      isRequired: true,
    },
    {
      name: "website",
      label: "Сайт",
      type: "text",
      defaultValue: user.website,
      isRequired: true,
    },
    {
      name: "comment",
      label: "Комментарий",
      type: "textarea",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fields}>
        {controls.map((control) => (
          <label key={control.name} className="label">
            {control.label}
            {control.type === "textarea" ? (
              <textarea
                readOnly={isReadOnly}
                className="textarea"
                {...register(control.name, { required: control.isRequired })}
              />
            ) : (
              <input
                type={control.type}
                defaultValue={control.defaultValue}
                readOnly={isReadOnly}
                className="input"
                {...register(control.name, { required: control.isRequired })}
              />
            )}
          </label>
        ))}
      </fieldset>
      <button disabled={isReadOnly} className={`submitButton ${styles.submit}`}>
        Отправить
      </button>
    </form>
  );
}
