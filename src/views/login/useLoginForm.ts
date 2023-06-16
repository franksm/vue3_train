import { useRouter } from 'vue-router'
import { computed, ref, type Ref } from 'vue'
import type { QueryForm } from '@/views/login/type/login'

export const useLoginForm = () => {
  /** 查詢表單參考 */
  const formRef: Ref = ref(null)

  /** router */
  const router = useRouter()

  /** 查詢表單 */
  const form = ref({
    name: '',
    password: ''
  } as QueryForm)

  /** 查詢表單驗證規則 */
  const rules = computed(() => {
    return {
      name: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
      password: [{ required: true, message: '請輸入密碼', trigger: 'blur' }]
    }
  })

  /** 登入事件 */
  const login = async () => {
    await formRef.value.validate(async (valid: boolean) => {
      if (valid) {
        router.push({
          name: 'HOME'
        })
      }
    })
  }

  return {
    rules,
    form,
    login,
    formRef
  }
}
