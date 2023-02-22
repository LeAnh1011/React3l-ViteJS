import moment from "moment";

export const BASE_URL: string | undefined = process.env.VITE_BASE_URL;
export const BASE_API_URL: string | undefined = process.env.VITE_BASE_API_URL;

/**
 * Date-time constants
 */
export const STANDARD_DATE_REGEX = /^[0-9]{4}-[0-9]{2}-[0-9]{2}?$/;
export const STANDARD_TIME_REGEX = /^[0-9]{2}:[0-9]{2}?$/;
export const STANDARD_DATE_TIME_REGEX_WITHOUT_TIMEZONE =
  /^[0-9]{4}-[0-9]{2}-[0-9]{2}[\sT][0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?$/;
export const STANDARD_DATE_TIME_REGEX =
  /^([0-9]{4}-[0-9]{2}-[0-9]{2})[\sT]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?)(Z|[+-][0-9]{2}:[0-9]{2})?$/;
export const STANDARD_DATE_FORMAT = "YYYY-MM-DD";
export const STANDARD_DATE_FORMAT_INVERSE = "DD-MM-YYYY";
export const STANDARD_TIME_FORMAT = "HH:mm:ss";
export const DEFAULT_DATETIME_VALUE = "0001-01-01T00:00:00.000Z";
export const STANDARD_DATE_TIME_FORMAT = `${STANDARD_DATE_FORMAT}${
  "T" + STANDARD_TIME_FORMAT + "Z"
}`;
export const STANDARD_DATE_TIME_FORMAT_VIEW = `${STANDARD_DATE_FORMAT_INVERSE} ${STANDARD_TIME_FORMAT}`;
export const TIMEZONE_OFFSET: string = moment().format("Z");

/**
 * Debounce time constants
 */
export const DEBOUNCE_TIME_100 = 100;

export const DEBOUNCE_TIME_150 = 150;

export const DEBOUNCE_TIME_200 = 200;

export const DEBOUNCE_TIME_250 = 250;

export const DEBOUNCE_TIME_300 = 300;

export const DEBOUNCE_TIME_350 = 350;

export const DEBOUNCE_TIME_400 = 400;

export const INPUT_DEBOUNCE_TIME = 400;

/**
 * limit constants
 */
export const DEFAULT_LIMIT_WORD = 50;
export const NOTIFICATION_LIMIT_WORD = 75;
export const DEFAULT_MAX_NUMBER = 99999999999999;
export const DEFAULT_DECIMAIL_DIGIT = 4;

/**
 * Filter constants
 */
export const DEFAULT_TAKE = 10;

export const SPECIAL_CHARACTERS =
  /[ `!@#$%^&*()_+\-=[\]{};':"|,.<>/?~ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]/;

/**
 * url constants
 */

export const ACTION_URL_REGEX = /^(\/?rpc)/;

/**
 * route constants
 */
export const FORBIDENT_ROUTE: string = BASE_URL + "/403";
export const NOT_FOUND_ROUTE: string = BASE_URL + "/404";
export const LOGIN_ROUTE: string = BASE_URL + "/login";
