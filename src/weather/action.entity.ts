import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  action_time?: Date;

  @Column()
  request_result: number;

  @Column()
  temp_c: number;
}