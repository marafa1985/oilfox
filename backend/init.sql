CREATE USER oilfox WITH ENCRYPTED PASSWORD 'oilfox';
ALTER USER oilfox WITH SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE postgres TO oilfox;

create table device
(
    id                                     uuid                                                              not null
        constraint oilfox_pk
            primary key,
    user_id                                uuid,
    last_metering_id                       uuid,
    partner_id                             uuid         default '843c8eb2-d163-43fd-9873-a37c316f65f8'::uuid not null,
    product_group_id                       uuid,
    hwid                                   varchar(12)                                                       not null
        constraint uq_hwid
            unique,
    notes                                  text,
    token                                  varchar(50),
    tank_height                            integer      default 0                                            not null,
    tank_volume                            integer      default 0                                            not null,
    tank_offset                            integer      default 0                                            not null,
    tank_is_usable_volume                  boolean      default false                                        not null,
    created_at                             timestamp                                                         not null,
    updated_at                             timestamp,
    internal_id                            varchar,
    address_id                             uuid,
    name                                   varchar,
    tank_shape                             varchar(255) default 'SQUARED'::character varying,
    mac_address                            varchar,
    notification_info_enabled              boolean      default true                                         not null,
    notification_info_percentage           integer      default 25                                           not null
        constraint device_notification_info_percentage_check
            check ((notification_info_percentage >= 0) AND (notification_info_percentage <= 100)),
    notification_info_below_level_counter  integer      default 0                                            not null,
    notification_alert_enabled             boolean      default true                                         not null,
    notification_alert_below_level_counter integer      default 0                                            not null,
    notification_alert_percentage          integer      default 15                                           not null
        constraint device_notification_alert_percentage_check
            check ((notification_alert_percentage >= 0) AND (notification_alert_percentage <= 100)),
    firmware_url_override                  varchar(255),
    firmware_version_override              integer,
    measurement_interval_override          integer,
    useable_volume                         integer,
    metering_windows                       varchar(255),
    sigfox_id                              bigint,
    replacement_for                        uuid,
    disabled                               boolean      default false                                        not null,
    imei                                   bigint,
    imsi                                   bigint,
    statistics_enabled                     boolean      default false                                        not null,
    metering_windows_state                 text,
    metering_windows_target                text,
    connectivity_preference                varchar,
    firmware_update_fails                  smallint     default 0                                            not null,
    setup_at                               timestamp,
    maintenance_state                      varchar(255) default 'UNKNOWN'::character varying                 not null
);

create table metering
(
    id                    uuid                   not null
        constraint metering_raw_pk
            primary key,
    hwid                  varchar(13)            not null
        constraint device_metering
            references device (hwid),
    value                 real,
    battery               real,
    sw_version            varchar(30),
    created_at            timestamp              not null,
    temperature           real,
    mac_address           varchar,
    metering_raw          varchar,
    forecast_date         timestamp,
    liters                real,
    liters_change         real,
    interval_metering     bigint,
    interval_refill       bigint,
    signal_strength       integer,
    coverage_class        integer,
    invalid               boolean  default false not null,
    message_type          integer,
    message_id            smallint default 0     not null,
    mobile                boolean  default false not null,
    has_dirty_calculation boolean  default true,
    has_dirty_forecast    boolean  default true
);
alter table metering
    owner to oilfox;

create index metering_invalid_index
    on metering (invalid);

create index metering_time_index
    on metering (created_at desc);

create index metering_hwid_index
    on metering (hwid);

alter table device
    owner to oilfox;

create unique index device_sigfox_id_uindex
    on device (sigfox_id);

create unique index device_imei_uindex
    on device (imei);

create unique index device_imsi_uindex
    on device (imsi);

alter table metering
    add constraint last_metering_fk
        FOREIGN KEY (hwid) references device (hwid) on delete cascade;

INSERT INTO public.device (id, user_id, last_metering_id, partner_id, product_group_id, hwid, notes, token, tank_height, tank_volume, tank_offset, tank_is_usable_volume, created_at, updated_at, internal_id, address_id, name, tank_shape, mac_address, notification_info_enabled, notification_info_percentage, notification_info_below_level_counter, notification_alert_enabled, notification_alert_below_level_counter, notification_alert_percentage, firmware_url_override, firmware_version_override, measurement_interval_override, useable_volume, metering_windows, sigfox_id, replacement_for, disabled, imei, imsi, statistics_enabled, metering_windows_state, metering_windows_target, connectivity_preference, firmware_update_fails, setup_at, maintenance_state) VALUES ('e1d08503-be3e-4192-a316-53c57aff4045', 'a2ad4a14-713e-4f19-8de8-0b0f131d115c', '007e7d35-5972-4485-8141-267e48b42dcb', 'fd46f28b-6451-410d-a54a-64b60199592d', 'be95b4f0-76cb-4494-aa2f-275bdce97852', 'DEMO1074', '1074', null, 160, 4717, 10, true, '2018-06-13 11:24:18.636000', '2019-09-24 09:25:56.166000', null, null, null, 'CYLINDER', null, true, 25, 0, true, 0, 15, null, null, null, 4717, null, null, null, false, null, null, false, null, null, null, 0, '2018-06-13 11:24:18.636000', 'OK');
INSERT INTO public.device (id, user_id, last_metering_id, partner_id, product_group_id, hwid, notes, token, tank_height, tank_volume, tank_offset, tank_is_usable_volume, created_at, updated_at, internal_id, address_id, name, tank_shape, mac_address, notification_info_enabled, notification_info_percentage, notification_info_below_level_counter, notification_alert_enabled, notification_alert_below_level_counter, notification_alert_percentage, firmware_url_override, firmware_version_override, measurement_interval_override, useable_volume, metering_windows, sigfox_id, replacement_for, disabled, imei, imsi, statistics_enabled, metering_windows_state, metering_windows_target, connectivity_preference, firmware_update_fails, setup_at, maintenance_state) VALUES ('a9692dda-fd39-4fb2-a731-948a4729098a', '95a1a0ed-925a-4f6e-8d25-0af81ebfc558', '009eb547-d5a5-48fe-a038-a67609f06c4d', 'fd46f28b-6451-410d-a54a-64b60199592d', 'be95b4f0-76cb-4494-aa2f-275bdce97852', 'DEMO1075', '1075', null, 120, 4704, 10, false, '2018-06-13 11:24:18.649000', '2019-09-24 09:27:26.588000', null, null, null, 'CYLINDER', null, true, 25, 0, true, 0, 15, null, null, null, 4469, null, null, null, false, null, null, false, null, null, null, 0, '2018-06-13 11:24:18.649000', 'OK');
INSERT INTO public.device (id, user_id, last_metering_id, partner_id, product_group_id, hwid, notes, token, tank_height, tank_volume, tank_offset, tank_is_usable_volume, created_at, updated_at, internal_id, address_id, name, tank_shape, mac_address, notification_info_enabled, notification_info_percentage, notification_info_below_level_counter, notification_alert_enabled, notification_alert_below_level_counter, notification_alert_percentage, firmware_url_override, firmware_version_override, measurement_interval_override, useable_volume, metering_windows, sigfox_id, replacement_for, disabled, imei, imsi, statistics_enabled, metering_windows_state, metering_windows_target, connectivity_preference, firmware_update_fails, setup_at, maintenance_state) VALUES ('f4781fd6-120c-421d-b540-36abda5fcbc7', '8c669f7f-2378-4185-976e-05a636470d92', '05b9c9b6-7bec-4b55-bec5-2871003c4124', 'fd46f28b-6451-410d-a54a-64b60199592d', 'be95b4f0-76cb-4494-aa2f-275bdce97852', 'DEMO1076', '1076', null, 230, 4250, 10, false, '2018-06-13 11:24:18.665000', '2019-09-24 09:27:26.681000', null, null, null, 'SQUARED', null, true, 25, 0, true, 0, 15, null, null, null, 4038, null, null, null, false, null, null, false, null, null, null, 0, '2018-06-13 11:24:18.665000', 'OK');

INSERT INTO public.metering (id, hwid, value, battery, sw_version, created_at, temperature, mac_address, metering_raw, forecast_date, liters, liters_change, interval_metering, interval_refill, signal_strength, coverage_class, invalid, message_type, message_id, mobile, has_dirty_calculation, has_dirty_forecast) VALUES ('007e7d35-5972-4485-8141-267e48b42dcb', 'DEMO1074', 25.464798, 1, null, '2019-09-23 21:50:33.569000', 21, null, '"demo"', null, 2503.1873, -27.380371, 86385045, 1382300410, null, null, false, 0, 0, true, false, false);
INSERT INTO public.metering (id, hwid, value, battery, sw_version, created_at, temperature, mac_address, metering_raw, forecast_date, liters, liters_change, interval_metering, interval_refill, signal_strength, coverage_class, invalid, message_type, message_id, mobile, has_dirty_calculation, has_dirty_forecast) VALUES ('009eb547-d5a5-48fe-a038-a67609f06c4d', 'DEMO1075', 91.9518, 1, null, '2019-09-23 18:32:42.915000', 21, null, '"demo"', null, 2396.8167, -35.375977, 86402085, 2073547748, null, null, false, 0, 0, true, false, false);
INSERT INTO public.metering (id, hwid, value, battery, sw_version, created_at, temperature, mac_address, metering_raw, forecast_date, liters, liters_change, interval_metering, interval_refill, signal_strength, coverage_class, invalid, message_type, message_id, mobile, has_dirty_calculation, has_dirty_forecast) VALUES ('05b9c9b6-7bec-4b55-bec5-2871003c4124', 'DEMO1076', 31.607346, 1, null, '2019-09-23 16:06:36.794000', 21, null, '"demo"', null, 993.80334, -18.870972, 86403525, 691261024, null, null, false, 0, 0, true, false, false);
